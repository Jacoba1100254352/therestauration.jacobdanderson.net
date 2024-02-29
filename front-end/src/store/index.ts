import {createStore} from "vuex";

export default createStore({
	state() {
		return {
			events: [], // To store events data
			figures: [], // To store key figures data
			multimedia: [] // To store multimedia content data
		};
	},
	mutations: {
		setEvents(state, events) {
			state.events = events;
		},
		setFigures(state, figures) {
			state.figures = figures;
		},
		setMultimedia(state, multimedia) {
			state.multimedia = multimedia;
		}
	},
	actions: {
		// Existing or new actions
		fetchEvents({commit}) {
			// Fetch your events data from an API or other source
			// This is a mockup; replace it with actual data fetching
			const eventsData = [
				{id: 1, name: "The First Vision", description: "Joseph Smith’s first vision in 1820."},
				{id: 2, name: "Translation of the Book of Mormon", description: "Completed in 1829 by Joseph Smith."},
				// Add more events as needed
			];
			commit("setEvents", eventsData);
		},
	},
	getters: {
		events: state => state.events,
		figures: state => state.figures,
		multimedia: state => state.multimedia
	},

});
