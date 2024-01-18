import Cursor from "../components/Cursor"
import MultiStepForm from "../forms/multiStepForms"

const TicketPage = () => {
  return (
    <>
      <Cursor/>
    <div className="px-24">
        <div className="flex text-2xl my-3 mb-6 justify-between">
      <h1>Enter your Details</h1>
      <h1>Payment</h1>
      <h1>Your Ticket</h1>
        </div>
      <MultiStepForm/>
    </div>
    </>
  )
}

export default TicketPage
