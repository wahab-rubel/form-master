import Special from "../Special/Special"
import PropTypes from 'prop-types';


function MySelf({asset}) {
  return (
    <div>
      <h2>MySelf</h2>
      <section className="flex">
       <Special asset={asset}></Special>
      </section>
    </div>
  )
}
MySelf.propTypes = {
  asset: PropTypes.string.isRequired,
};
export default MySelf
