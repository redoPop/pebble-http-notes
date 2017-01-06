# Deprecation notice

This app was written for the Pebble Smartwatch. [Since the Pebble has been discontinued,](https://blog.getpebble.com/2016/12/07/fitbit/) I will no longer be maintaining this code.

# Pebble HTTP Notes

A simple app to display and refresh the contents of a web-hosted note split into categories using a markdown-like format.

An example of the exact note format can be seen [here](https://gist.githubusercontent.com/redoPop/f79c2de8f684a50c7200/raw/1dfee4034d28c46224681eaa673c612a4c7a9442/note.md); each `# heading` in the doc is rendered as a menu item which can be selected to read its contents, making the entire note pretty easy to skim in Pebble.

## Setup

Copy `src/js/config/app.json.example` to `src/js/config/app.json` and modify the note URL within.

## Installing

Please check [the Pebble.js docs](https://github.com/pebble/pebblejs) if this is your first time playing with Pebble.js. Once you have the SDK etc. set up, the short of the install process is, as always:

    pebble build
    pebble install --phone 192.168.0.1

Where _192.168.0.1_ is the local IP of your phone (which is shown under "Listening on" in the developer menu of the Pebble app if you aren't sure).
