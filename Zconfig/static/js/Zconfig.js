/*
 * View model for Zconfig
 *
 * Author: Thierry Guyot
 * License: AGPLv3
 */
$(function() {
    function ZconfigViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
         self.loginStateViewModel = parameters[0];
         self.settingsViewModel = parameters[1];
         self.controlViewModel = parameters[2];

         self.controlViewModel.commandString = ko.observable("");
         self.controlViewModel.cmdHistoryIdx=-1;

         self.onStartup = function() {
            $('#control-jog-z-config').insertAfter('#control-jog-general');
        }

         self.controlViewModel.Zconfig_sendCommand = function() {
            OctoPrint.control.sendGcode("G29");
        }
    };

// view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push({
        construct: ZconfigViewModel,
        dependencies: ["loginStateViewModel","settingsViewModel","controlViewModel"],
        elements: []
    });
});