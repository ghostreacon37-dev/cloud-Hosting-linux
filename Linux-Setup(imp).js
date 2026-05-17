// step-1
pwd 

//step-2
docker --version 

// step-3
rm -rf webtop-config 
rm -f docker-compose.yml

// step-4 for Debian Xfce
cat > docker-compose.yml <<EOF 
services:
  debian-desktop:
    image: lscr.io/linuxserver/webtop:debian-xfce
    container_name: debian_gui
    ports:
      - "6080:3000"
    volumes:
      - ./webtop-config:/config
    restart: unless-stopped
EOF

// step-4 for Ubuntu 

@PS91104 ➜ /workspaces/lol (main) $ cat > docker-compose.yml <<EOF
services:
  ubuntu-desktop:
    image: lscr.io/linuxserver/webtop:ubuntu-mate
    container_name: ubuntu_gui
    ports:
      - "6080:3000"
    volumes:
      - ./webtop-config:/config
    restart: unless-stopped
EOF

// step-5 *(optional)*
ls

// step-6
cat docker-compose.yml 

// step-7 *(repeat if this isnt starts)*
docker compose up -d

// step-8 *(to stop)*
docker stop debian_gui 

// step-9 *(to start)*
docker start debian_gui 
