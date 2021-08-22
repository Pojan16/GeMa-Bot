# GeMa-Bot

Simple WhatsApp Bot


[![Zeroz04n](https://github.com/Pojan16.png?size=100)](https://github.com/Pojan16)
[`Zeroz04n`](https://github.com/Pojan16)

<a href="https://github.com/Pojan16/GeMa-Bot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Pojan16/GeMa-Bot?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/Pojan16/GeMa-Bot/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/Pojan16/GeMa-Bot?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/Pojan16/GeMa-Bot/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/Pojan16/GeMa-Bot?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/Pojan16/GeMa-Bot/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/Pojan16/GeMa-Bot?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/Pojan16/GeMa-Bot/issues"><img title="Issues" src="https://img.shields.io/github/issues/Pojan16/GeMa-Bot?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/Pojan16/GeMa-Bot/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/Pojan16/GeMa-Bot?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/Pojan16/GeMa-Bot/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/Pojan16/GeMa-Bot?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/Pojan16/GeMa-Bot/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/Pojan16/GeMa-Bot?label=PullRequest&color=red&style=flat-square"></a>


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Pojan16/GeMa-Bot)

## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
git clone https://github.com/Pojan16/GeMa-Bot
cd GeMa-Bot
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Pojan16/GeMa-Bot
cd GeMa-Bot
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--db <json-server-url>`

Use external db instead of local db, 
Example Server `https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

The server should have like this specification

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

If small qr unicode doesn't support

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

### Thanks to
[`Nurutomo`](https://github.com/Nurutomo)
[`Ariffb`](https://github.com/ariffb25)
[`BochilGaming`](https://github.com/BochilGaming)
[`Ftwrr`](https://github.com/Ftwrr)
[`RCO47`](https://github.com/RCO47)

and other Contributors

---------

### Powered by XTEAM
<a href="https://api.xteam.xyz"><img src="https://i.ibb.co/7j0vtwz/xlogo.png" width="100" height="100"></a>
[XTEAM](https://api.xteam.xyz/)


NOTE: This Script Is Free, Don't Sell It!!!
