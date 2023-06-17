import formStyles from '../styles/Form.module.css'

const Form = () => {
  return (
    <div>
        <form className={formStyles.container}>
        <span>
          <input type="text" placeholder="Name">
          </input>
          <input type="email" placeholder="Email">
          </input>
          <button>Submit</button>
        </span> 
        </form>
        
    </div>
  )
}

export default Form