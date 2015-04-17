// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

/* global ZeroClipboard, addAnchors */

!function ($) {
  'use strict';

  $(function () {

    // // Scrollspy
    // var $window = $(window)
    // var $body   = $(document.body)

    // $body.scrollspy({
    //   target: '.active .bd-sidenav'
    // })
    // $window.on('load', function () {
    //   $body.scrollspy('refresh')
    // })

    // Kill links
    // $('[href=#]').click(function (e) {
    //   e.preventDefault()
    // })

    // Tooltip and popover demos
    $('.tooltip-demo').tooltip({
      selector: '[data-toggle="tooltip"]',
      container: 'body'
    })
    $('.popover-demo').popover({
      selector: '[data-toggle="popover"]',
      container: 'body'
    })

    // Demos within modals
    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // Popover demos
    $('.bd-popover').popover()

    // Button state demo
    $('#loading-example-btn').on('click', function () {
      var btn = $(this)
      btn.button('loading')
      setTimeout(function () {
        btn.button('reset')
      }, 3000)
    })

    // Modal relatedTarget demo
    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })

    // Activate animated progress bar
    $('.bd-activate-animated-progressbar').on('click', function () {
      $(this).prev('.progress-striped').toggleClass('progress-animated')
    })

    // Custom indeterminate checkbox
    $('.bs-example-indeterminate input').prop('indeterminate', true)

    // Config ZeroClipboard
    ZeroClipboard.config({
      moviePath: '/assets/flash/ZeroClipboard.swf',
      hoverClass: 'btn-clipboard-hover'
    })

    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function () {
      var btnHtml = '<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>'
      $(this).before(btnHtml)
    })
    var zeroClipboard = new ZeroClipboard($('.btn-clipboard'))
    var htmlBridge = $('#global-zeroclipboard-html-bridge')

    // Handlers for ZeroClipboard
    zeroClipboard.on('load', function () {
      htmlBridge
        .data('placement', 'top')
        .attr('title', 'Copy to clipboard')
        .tooltip()
    })

    // Copy to clipboard
    zeroClipboard.on('dataRequested', function (client) {
      var highlight = $(this).parent().nextAll('.highlight').first()
      client.setText(highlight.text())
    })

    // Notify copy success and reset tooltip title
    zeroClipboard.on('complete', function () {
      htmlBridge
        .attr('title', 'Copied!')
        .tooltip('fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('fixTitle')
    })

    // Notify copy failure
    zeroClipboard.on('noflash wrongflash', function () {
      htmlBridge
        .attr('title', 'Flash required')
        .tooltip('fixTitle')
        .tooltip('show')
    })

  })

}(jQuery)

;(function () {
  'use strict';
  addAnchors('.bd-container > h1, .bd-container > h2, .bd-container > h3, .bd-container > h4, .bd-container > h5');
})();