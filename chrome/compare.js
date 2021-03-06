(function() {
  var config = {
      insertBefore : ['.composer-submit'],
      bodySelector : '#pull_request_body',
      buttonHTML   : (
        '<div class="selfieButtonContainer">' +
          '<button id="totallyAwesomeSelfieButton" type="button" class="button">' +
            '<span id="totallyAwesomeSelfieIcon" class="octicon octicon-device-camera"></span>' +
            'Selfie!' +
          '</button>' +
        '</div>'
      )
    }
    , client = new GitHubSelfies(config);
  client.setupSelfieStream();
})();
