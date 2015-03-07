var ajax = require('ajax');
var config = require('config/app.json');
var UI = require('ui');

function showMenu() {
  main.items(1, items);
}

function showNote(item) {
  if (!item.card) {
    item.card = new UI.Card({
      title: item.title,
      body: item.subtitle,
      scrollable: true
    });

    item.card.on('click', 'back', function() {
      item.card.hide();
    });
  }

  item.card.show();
}

function parseNote(data) {
  var dataArray = data.split('\n');
  var item;

  items = [];

  for (var i = 0; i < dataArray.length; i++) {
    if (dataArray[i][0] == '#') {
      if (item) {
        items.push(item);
      }

      item = {
        title: dataArray[i].substr(2),
        subtitle: ''
      };
    } else if (item) {
      item.subtitle += '\n' + dataArray[i];
    }
  }

  if (item) {
    items.push(item);
  }

  showMenu();
}

function loadNote() {
  ajax({
    cache: false,
    url: noteUrl
  }, function (data) {
    localStorage.setItem('note', data);
    parseNote(data);
  });
}

var data = localStorage.getItem('note');
var noteUrl = config.noteUrl;
var items = [];

var main = new UI.Menu({
  sections: [
    {
      items: [{title: 'Refresh'}]
    },
    {
      title: 'Notes',
      items: []
    }
  ]
});

main.on('select', function (e) {
  if (e.sectionIndex === 1) {
    showNote(items[e.itemIndex]);
  } else {
    loadNote();
  }
});

main.show();

if (data) {
  parseNote(data);
} else {
  loadNote();
}
