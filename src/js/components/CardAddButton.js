import React from 'react';
import PropTypes from 'prop-types';

const CardAddButton = ({
  isAdding,
  count,
  handleAdd,
  handleSave,
  handleCancel,
}) => {
  if (isAdding) {
    return (
      <div className="p-2">
        <button id="add-card-btn" type="button" className="btn btn-success" onClick={handleSave}>Add Card</button>
        <button type="button" className="close" aria-label="close" onClick={handleCancel}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
  return (
    <div
      className="card-footer list-footer text-secondary p-2"
      role="button"
      tabIndex={0}
      onKeyPress={handleAdd}
      onClick={handleAdd}
    >
      {count ? '+ Add another card' : '+ Add a card'}
    </div>
  );
};

CardAddButton.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default CardAddButton;
