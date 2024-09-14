import {useRouter} from 'next/router'

// The user should be brought to this page after choosing a category of food
// This will show the cards to the user
export default function Quiz() {
    const router = useRouter();
    const category = router.query.category;

    // TODO: get the list of foods from the AI given the category of food
    // TODO: choose a random food, and show the google maps of how to get there on another page
    
    return {category};
}