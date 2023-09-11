import {getFeaturedEvents} from '../helpers/api-util'
import EventList from '../components/event-list'

export default function HomePage(props){

    
    return(

        <div>
            <EventList item={props.events} />
        </div>
    )
}

export async function getStaticProps(){

    const featureEvents = await getFeaturedEvents()

    return{

        props: {
            events: featureEvents
        },
        revalidate: 1800
    }
}
