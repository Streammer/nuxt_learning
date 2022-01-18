export default function({store, redirect}) {
    const auth = store.getters['auth/isAuthentificated']
    if(!auth) {
        redirect('/')
    }
}