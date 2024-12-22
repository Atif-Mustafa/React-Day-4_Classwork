import styles from './QuoteList.module.css'
import Quote from '../../components/Quote/Quote';
import data from '../../Quote';
const QuoteList = () => {
    return (
        <>
       {/* {console.log("in quoteList")} */}
            {
                data.map((quote,index) => {
                    return <Quote key= {index} quote={quote.quote} by={quote.by !== undefined ? quote.by : ""} />
                })
            }
        </>
    )
}

export default QuoteList;