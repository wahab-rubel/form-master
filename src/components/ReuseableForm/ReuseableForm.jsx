import PropTypes from 'prop-types';


function ReuseableForm({handleSubmit, submitBtnText = 'Submit', children}) {
  
const handleLocalSubmit = e =>{
  e.preventDefault();
  const data = {
  name: e.target.name.value,
  email: e.target.email.value, 
  password: e.target.password.value
  }
  handleSubmit(data);
}

  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
       <input type="text" name="name" />
       <br />
       <input type="email" name="email" />
       <br />
       <input type="password" name="password" />
       <br />
      <input type="submit" value={submitBtnText} />
      </form>
    </div>
  )
}
ReuseableForm.propTypes = {
  children: PropTypes.string.isRequired,
  handleSubmit: PropTypes.string.isRequired,
  submitBtnText: PropTypes.string.isRequired,
};
export default ReuseableForm
