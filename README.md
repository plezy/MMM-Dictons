# MMM-Dictons
MMM-Dictons is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It provides a saying on the screen (dicton in french).

Multiple options provide the possibility to select sayings among themes or to display saying based on the current date.

## Installation

1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/plezy/MMM-Dictons.git`.
2. A new folder will appear, navigate into it : `cd MMM-Dictons`,
3. Configure the 'config.js' to suits your needs.
4. Reboot your Pi.

## Usage

The entry in `config.js` can look like the following.

You only have to add variables to config if you want to change the standard value.
```javascript
...
},

{
  module: 'MMM-Dictons',
  position: 'top_left',
	config: {
	  select: "day"
	}
},
}
...
```

## Options

| Option                       | Description
| ---------------------------- | -----------
| `select  `                   | selects the display type. `'day'`displays the saying for the current day. Any other options are overidden. `'all'` will display sayings of any themes based on all available themes. Finally, you can select a comma separated list of themes. (eg : `'love,nature'`)
