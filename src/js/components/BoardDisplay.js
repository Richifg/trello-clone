import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateColorAction, modifyBoardAction, removeRecentAction } from '../redux/actions';

const BoardDisplay = ({
  boardId,
  name,
  color,
  starred,
  updateColor,
  modifyBoard,
  removeRecent,
}) => (
  <div className="col-lg-auto col-md-4 col-6 my-2">
    <a
      role="button"
      className={`btn btn-block text-light board-display bg-${color} bg-${color}-hover`}
      href={`#/board/${boardId}`}
      onClick={() => updateColor({ color })}
    >
      <div className="container h-100 px-0">
        <div className="row mx-0 h-75">
          <p className="board-display-title">{name}</p>
        </div>
        <div className="row mx-0 h-25">
          <button
            type="button"
            className={`btn p-0 ml-auto board-display-star ${starred ? 'star-yellow' : 'star-white'}`}
            onClick={(e) => {
              if (!starred) removeRecent({ boardId });
              modifyBoard({ boardId, newValues: { starred: !starred } });
              e.stopPropagation();
            }}
          >
            <FontAwesomeIcon icon={['far', 'star']} />
          </button>
        </div>
      </div>
    </a>
  </div>
);


BoardDisplay.propTypes = {
  boardId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  starred: PropTypes.bool.isRequired,
  updateColor: PropTypes.func.isRequired,
  modifyBoard: PropTypes.func.isRequired,
  removeRecent: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  color: state.boards[ownProps.boardId].color,
  name: state.boards[ownProps.boardId].name,
  starred: state.boards[ownProps.boardId].starred,
});

const mapDispatchToProps = dispatch => ({
  updateColor: payload => dispatch(updateColorAction(payload)),
  modifyBoard: payload => dispatch(modifyBoardAction(payload)),
  removeRecent: payload => dispatch(removeRecentAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDisplay);
