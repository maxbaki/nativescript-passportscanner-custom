var PassportScanner = null;

try {
  PassportScanner = UIViewController.extend({      
      scanCard: function(viewController) {
        var self = this;

        return new Promise(function (resolve, reject) {
          self.resolve = resolve;
          self.reject = reject;

          var scanViewController = MyScanViewController.new();
          scanViewController.delegate = self;
          viewController.presentViewControllerAnimatedCompletion(scanViewController,true,null);
        });

      }
}, {
      name: "PassportScanner",
      protocols: [ProcessMRZ]
  });

  PassportScanner.ObjCProtocols = [ProcessMRZ];
} catch (e) {
  console.log(e.message);
}

exports.PassportScanner = PassportScanner.new();
