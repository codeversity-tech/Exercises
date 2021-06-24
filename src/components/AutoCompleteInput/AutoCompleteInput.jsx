import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // Opcional
import lodash from 'lodash'; // Etapa 3
import { useDispatch, useSelector } from 'react-redux' // Etapa 2

import { isLoadingSelector } from '../../models/UI/selectors';

const DEBOUNCE_DELAY = 500; // Etapa 3

// Exported method can be either a function or a class

const AutoCompleteInput = () => {

  const suggestions = useSelector((state) => state.pokemons);
  const isLoading = useSelector(isLoadingSelector);

  return (
		<div className="wrapper">
			<div className="control">
				<input type="text" className="input" />
			</div>
			<div className="list is-hoverable" />
		</div>
	)
};

AutoCompleteInput.propTypes = {
  placeholder: PropTypes.string,
  onSelectedItem: PropTypes.func.isRequired,
}

AutoCompleteInput.defaultProps = {
  placeholder: '',
};

export default AutoCompleteInput;
