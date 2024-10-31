import PropTypes from 'prop-types';
import Special from '../Special/Special';
import Friend from '../Grandpa/Friend/Friend';

function Cousin({name, asset}) {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section >
       {asset &&  <Special asset={asset}></Special>}
       {name === 'Rubaiya' && <Friend></Friend>}
      </section>
    </div>
  )
}
Cousin.propTypes = {
 name: PropTypes.string,
 asset: PropTypes.string
}
export default Cousin
