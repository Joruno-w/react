import PropTypes from 'prop-types';
export default {
    children: PropTypes.node,
    groupData: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    chooseData: PropTypes.arrayOf(PropTypes.string),
}
