//MMM-Dictons.js:

Module.register("MMM-Dictons",{
    // Default module config.
    defaults: {
		// all => select all sayings except sayings linked to date (default)
		// day => select sayings linked to date
		// <theme> => theme named saying list in config.sayings
        
		select: "all",
		
		sayings : { "all" : [ 
			"A beautiful thing is never perfect.",
			"Beauty is in the eye of the beholder.",
			"Beauty is only skin deep.",
			"Butterflies come to pretty flowers.",
			"Do not dissect a rainbow. ",
			"Don't gild the lily.",
			"Everything is lovely when the geese honk high.",
			"Music has charms to soothe a savage beast.",
			"See life through an artist's eye.",
			"Stop and smell the roses.",
			"The eyes are the windows of the soul.",
			"Everything has beauty, but not everyone sees it.",
			"Beauty is power; a smile is its sword.",
			"You can't buy love.",
			"Love is like the wind, you can't see it but you can feel it.",
			"Where there is love there is life.",
			"A morning without coffee is like sleep.",
			"Decaffeinated coffee is the devil's blend.",
			"I'd rather take coffee than compliments just now.",
			"Coffee and love are best when they are hot.",
			"Every pot will find its lid.",
			"If it were not for hope, the heart would break.",
			"Where there's life, there's hope."	
		] },
		
		updateInterval: 30000,
		fadeSpeed: 4000,
		language: "en"
    },
	
	requiresVersion: "2.1.0",
	
	file2load: "dictonsEN.json",
	
	// Define required scripts.
	// moment.js to get current day values
	getScripts: function() {
		return ["moment.js"];
	},

	getTranslations: function() {
		return {
				fr: "translations/fr.json",
				en: "translations/en.json"
		}
	},
	
	// start loading sayings from file and set update interval
	start: function() {
		Log.info(this.name + " - Starting module...");

		if (this.config.language != null) {
			this.file2load = this.translate("FILE");
			Log.info(this.name + " - loading file : " + this.file2load);
			this.loadFile((response) => {
				this.config.sayings = JSON.parse(response);
			});
		}

		// Schedule update timer.
		var self = this;		
		setInterval(function() {
				self.updateDom(self.config.fadeSpeed);
			}, this.config.updateInterval);
	},

    // Override dom generator.
    getDom: function() {
		Log.log(this.name + " - getDom method called ");
	
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.getRandomSaying();;
        return wrapper;
    },
	
	// Module's notifications
	notificationReceived: function(notification, payload, sender) {
		if (sender) {
			Log.log(this.name + " - received a module notification: " + notification + " from sender: " + sender.name);
		} else {
			Log.log(this.name + " - received a system notification: " + notification);
		}
	},
	
	/* loadFile(callback)
	 * Retrieve a file from the local filesystem
	 */
	loadFile: function(callback) {
		Log.log(this.name + " - loading file using XMLHttpRequest : " + this.file2load);
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open("GET", this.file(this.file2load), true);
		xobj.onreadystatechange = function() {
			if (xobj.readyState == 4 && xobj.status == "200") {
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	},
	
	/*
	 * get Saying to be displayed
	 */
	getRandomSaying: function() {
		var saying = "test saying !";
		
		return saying;
	}
	
  }
);