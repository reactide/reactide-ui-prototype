import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './Hello';

import styles from './main.less';

class App extends React.Component {
	render () {
		return (

    <ride-workspace className="scrollbars-visible-always">

      <ride-panel-container className="header"></ride-panel-container>

      <ride-pane-container>
        <ride-pane>
          <ride-pane-axis className="horizontal">
            <div className="tree-view-resizer tool-panel">
              <div className="tree-view-scroller">
                <ol className="tree-view full-menu list-tree has-collapsable-children">
                  <li className="directory entry list-nested-item project-root expanded">
                    <div className="header list-item project-root-header">
                      <span className="name icon icon-file-directory">A Directory</span>
                    </div>
                    <ol className="entries list-tree">
                      <li className="list-nested-item">
                        <div className="list-item">
                          <span className="icon icon-file-directory">Nested Directory</span>
                        </div>
                        <ol className="list-tree">
                          <li className="list-item">
                            <span className="icon icon-file-text text-info">File one</span>
                          </li>
                          <li className="list-item">
                            <span className="icon icon-file-text">File one</span>
                          </li>
                          <li className="list-item">
                            <span className="icon icon-file-text">File one</span>
                          </li>
                        </ol>
                      </li>
                      <li className="list-nested-item collapsed">
                        <div className="list-item">
                          <span className="icon icon-file-directory">Collapsed Nested Directory</span>
                        </div>
                        <ol className="list-tree">
                          <li className="list-item">
                            <span className="icon icon-file-text">File one</span>
                          </li>
                        </ol>
                      </li>
                      <li className="list-item">
                        <span className="icon icon-file-text">File one</span>
                      </li>
                      <li className="list-item selected">
                        <span className="icon icon-file-text">File three .selected!</span>
                      </li>
                    </ol>
                  </li>
                  <li className="list-item">
                    <span className="icon icon-file-text">.icon-file-text</span>
                  </li>
                  <li className="list-item">
                    <span className="icon icon-file-text">.icon-file-text</span>
                  </li>
                  <li className="list-item">
                    <span className="icon icon-file-text text-error">.icon-file-text</span>
                  </li>
                  <li className="list-item">
                    <span className="icon icon-file-media">With icon-file-media.jpg</span>
                  </li>
                  <li className="list-item">
                    <span className="icon icon-book">With icon-book</span>
                  </li>
                  <li className="list-item">
                    <span className="icon icon-file-symlink-file">.icon-file-symlink-file</span>
                  </li>
                </ol>
              </div>
              <div className="tree-view-resize-handle"></div>
            </div>
          </ride-pane-axis>
        </ride-pane>
      </ride-pane-container>

      <ride-panel-container className="footer">
      </ride-panel-container>

    </ride-workspace>

		);
	}
}

ReactDOM.render(React.createElement(App), document.getElementById('app'), null);
