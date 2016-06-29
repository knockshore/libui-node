
var libui = require('../index');

libui.Ui.init();
var win = new libui.UiWindow('UiRadioButtons example', 320, 60, true);
win.margined = true;

var widget = new libui.UiRadioButtons();
widget.text = 'sample text';
win.setChild(widget);

win.onClosing(function () {
	win.close();
	libui.Ui.quit();
});

win.show();

libui.Ui.main();

