# MMM-Dictons
MMM-Dictons is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It provides a saying on the screen (dicton in french).

Multiple options provide the possibility to select sayings among themes or to display saying based on the current date.

## Installation

1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/plezy/MMM-Dictons.git`.
2. Configure the `config.js` file to suits your needs.
3. Reboot your Pi.

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

## Saying's database

Sayings are stored in the folder `modules/MMM-Dictons/dictons`. A database file is created for each language. The file name is built with `dictons` follown by the two uppercase letters representing the language. Finally, file's extension is `.json`.

As expressed by the filename's extension, it is a JSON formatted file.

It is built as a javascript object containing theme named object's consisting of a list of sayings for the theme.

example:
```javascript
{
  "love": [
  	"Love starts with a hug, grows with a kiss, and ends with a tear.",
	"Guys are like stars, there are millions of them, but only one makes your dreams come true."
  ],
  "mother": [
  	"Always love your mother because you will never get another.",
	"Birth is the only time when you cry and your mother smiles."
  ]
}
...
```

Saying of the day is a special object named `'day'`. this object is builf of month's objects containing in turn day's object.

Objects for a day contains the list of string to be used for a day.

example:
```javascript
{
    "day" : 
              { "1" :
                { "1" : [
                    "Nuit du nouvel an sereine, signe d'une année pleine.",
                    "À l'an neuf, le jour augmente d'un pas de bœuf.",
                  ]
                ,
                 "2" : [
                    "Le temps du deux janvier présage celui de septembre.",
                    "Saint Clair porte quarantaine."
                  ]
		  
		  ....
		}
              ,
               "2" :
                { "1" : [
                    "Janvier et février comblent ou vident le grenier.",
                    "Que si janvier est bouier, ne le sont ni mars ni février.",
                  ]
                ,
		  ....
		}
              ,
	      ...
            }
}
...
```
