var React = require('react');
var ReactDom = require('react-dom');

/*
 StorePicker
 This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({

  render : function(){
    return (
      <p>hellooooooooooo</p>
    )
  }
  });

ReactDom.render(<StorePicker/>, document.querySelector('#main'));
