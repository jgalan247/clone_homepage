#!/bin/bash
set -euo pipefail

apt-get update
apt-get install -y build-essential libpq-dev netcat-traditional
pip install --upgrade pip
pip install -r requirements.txt
