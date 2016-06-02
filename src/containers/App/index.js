import React, { Component } from 'react'

require('./styles.styl')
require('./test-autoprefixer.css')

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2>STATIC</h2>
        <p>stylus класс</p>
        <div className='css-static-icon-ppl'></div>
        <p>svg в IMG SRC из статики</p>
        <img src='/static/i/icon_from_static.svg' width='100'/>
        <hr />
        <h2>REQUIRED</h2>
        <p>stylus класс + required  + относительный путь в файле стилей</p>
        <div className='css-icon-ppl'></div>
        <p>svg в IMG SRC через require</p>
        <img className='icon-ppl' src={require('./testRelativePaths/i/icon.svg')} />
        <hr />
        <p className='test-autoprefixer'>Test autoprefixer на css файле</p>
      </div>
    )
  }
}
