#!/bin/bash
set -euo pipefail

# Load credentials
if [ ! -f .env ]; then
  echo "Fout: .env niet gevonden. Kopieer .env.example naar .env en vul je gegevens in."
  exit 1
fi
source .env

# Build sftp batch file
BATCH=$(mktemp)
trap "rm -f $BATCH" EXIT

add_file() {
  local file="$1"
  # Strip leading slash from SFTP_PATH so paths stay relative to SFTP home
  local base="${SFTP_PATH#/}"
  local remote="${base}${file}"
  local remote_dir
  remote_dir=$(dirname "$remote")
  [ "$remote_dir" != "." ] && echo "-mkdir \"$remote_dir\"" >> "$BATCH"
  echo "put \"$file\" \"$remote\"" >> "$BATCH"
}

# Directories
for dir in css js lang; do
  find "$dir" -type f | while IFS= read -r file; do
    add_file "$file"
  done
done

# Losse bestanden
for file in \
  "index.html" \
  "Revand logo.png" \
  "Ruben foto.png" \
  "Goksel and I.JPG" \
  "Goksel and group.JPG"
do
  [ -f "$file" ] && add_file "$file"
done

echo "Deploying naar ${SFTP_HOST}..."
echo "(Voer je Strato-wachtwoord in als daarom wordt gevraagd)"
echo ""

sftp -P 22 \
  -o StrictHostKeyChecking=accept-new \
  "${SFTP_USER}@${SFTP_HOST}" < "$BATCH"

echo ""
echo "Klaar! De website is bijgewerkt."
