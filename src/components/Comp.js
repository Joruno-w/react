import React, {Component} from 'react';
import PropTypes from 'prop-types';
export function A() {

}

class Comp extends Component {
    static propTypes = {
        a: PropTypes.string.isRequired,
        b: PropTypes.array.isRequired,
        c: PropTypes.bool.isRequired,
        d: PropTypes.func.isRequired,
        e: PropTypes.number.isRequired,
        f: PropTypes.object.isRequired,
        g: PropTypes.symbol.isRequired,
        h: PropTypes.node.isRequired,
        i: PropTypes.element.isRequired,
        j: PropTypes.elementType.isRequired,
        k: PropTypes.instanceOf(A),
        l: PropTypes.oneOf(['男','女']),
        m: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        n: PropTypes.arrayOf(PropTypes.number),
        o: PropTypes.objectOf(PropTypes.number),
        p: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
            address: PropTypes.shape({
                province: PropTypes.string,
                city: PropTypes.string
            })
        }),
        q: PropTypes.exact({
            name: PropTypes.string,
            age: PropTypes.number,
            address: PropTypes.shape({
                province: PropTypes.string,
                city: PropTypes.string
            })
        }),
        r:(props, propName, componentName, location, propFullName) => {
            if (props[propName] == null){
                return new Error(`the ${propName} in ${componentName} must be not null`);
            }

            if (typeof props[propName] !== "number"){
                return new Error(`the ${propName} in ${componentName} must be a number`);
            }

            if (props[propName] < 0 && props[propName] > 100){
                return new Error(`the ${propName} in ${componentName} must be between 0 and 100`);
            }
        }
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Comp;
