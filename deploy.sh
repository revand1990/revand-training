#!/bin/bash
set -euo pipefail

# Load FTP credentials
if [ ! -f .env ]; then
  echo "Fout: .env niet gevonden. Kopieer .env.example naar .env en vul je gegevens in."
  exit 1
fi
source .env

# Encode spaces in URL paths
url_encode() {
  echo "$1" | sed 's/ /%20/g'
}

upload() {
  local local_path="$1"
  local remote_url="${FTP_BASE}/$(url_encode "$1")"
  echo "  → $local_path"
  curl --ssl-reqd --ftp-create-dirs --silent --show-error \
    --user "${FTP_USER}:${FTP_PASS}" \
    -T "$local_path" \
    "$remote_url"
}

upload_dir() {
  find "$1" -type f | while IFS= read -r file; do
    upload "$file"
  done
}

# Build base URL
FTP_BASE="ftps://${FTP_HOST}/${FTP_PATH}"

echo "Deploying naar ${FTP_HOST}..."
echo ""

# Directories
for dir in css js lang; do
  upload_dir "$dir"
done

# Losse bestanden
upload "index.html"
upload "Revand logo.png"
upload "Ruben foto.png"
upload "Goksel and I.JPG"
upload "Goksel and group.JPG"

echo ""
echo "Klaar! De website is bijgewerkt."
