// @flow
import React from 'react'
import Button from './Button.jsx'

type Props = {
  isOpen: boolean,
  onClose: () => void,
  details: any,
}

const DialogForProjectItems = ({ isOpen, onClose, details }: Props): React$Node => {
  if (!isOpen) return null

  return (
    <>
      {/*----------- Single dialog that can be shown for any project item -----------*/}
      <dialog id="projectControlDialog" className="projectControlDialog" aria-labelledby="Actions Dialog" aria-describedby="Actions that can be taken on projects">
        <div className="dialogTitle">
          For <i className="pad-left pad-right fa-regular fa-file-lines"></i>
          <b>
            <span id="dialogProjectNote">?</span>
          </b>
        </div>
        <div className="dialogBody">
          <div className="buttonGrid" id="projectDialogButtons">
            <div>Project Reviews</div>
            <div id="projectControlDialogProjectControls">
              <button data-control-str="finish">
                <i className="fa-regular fa-calendar-check"></i> Finish Review
              </button>
              <button data-control-str="nr+1w">
                <i className="fa-solid fa-forward"></i> Skip 1w
              </button>
              <button data-control-str="nr+2w">
                <i className="fa-solid fa-forward"></i> Skip 2w
              </button>
              <button data-control-str="nr+1m">
                <i className="fa-solid fa-forward"></i> Skip 1m
              </button>
              <button data-control-str="nr+1q">
                <i className="fa-solid fa-forward"></i> Skip 1q
              </button>
            </div>
            <div></div>
            <div>
              <form>
                <button id="closeButton" className="mainButton">
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default DialogForProjectItems
