export const state = () => ({
    isAuthentificated: true
})
export const getters = {
    isAuthentificated: state => state.isAuthentificated
}