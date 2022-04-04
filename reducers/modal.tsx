import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    limitPeopleModal: false,
    locationTimeModal: false,
    quarantineModal: false,
    운영시간모달: false,
    방역패스모달:false,
    새로운소식모달: false,
    소식1모달: false,
    소식2모달: false,
    소식3모달: false,
    pcr모달: false,
    접촉자모달: false,
    해외입국자모달: false,
    pcr확인서모달: false,
    배경화면모달: false
}

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setPeoPleModal(state,action){
            state.limitPeopleModal = !state.limitPeopleModal;
        },
        setLocationTimeModal(state,action){
            state.locationTimeModal = !state.locationTimeModal;
        },
        setCoronaPassModal(state,action){
            state.quarantineModal = !state.quarantineModal;
        },
        set운영시간(state,action){
            state.운영시간모달 = !state.운영시간모달;
        },
        set방역패스(state,action){
            state.방역패스모달 = !state.방역패스모달;
        },
        set새로운소식모달(state,action){
            state.새로운소식모달 = !state.새로운소식모달;
        },
        set소식1모달(state,action){
            state.소식1모달 = !state.소식1모달;
        },
        set소식2모달(state,action){
            state.소식2모달 = !state.소식2모달;
        },
        set소식3모달(state,action){
            state.소식3모달 = !state.소식3모달;
        },
        setPcr모달(state,action){
            state.pcr모달 = !state.pcr모달;
        },
        set접촉자모달(state,action){
            state.접촉자모달 = !state.접촉자모달;
        },
        set해외입국자모달(state,action){
            state.해외입국자모달 = !state.해외입국자모달;
        },
        setPcr확인서모달(state,action){
            state.pcr확인서모달 = !state.pcr확인서모달;
        },
        set배경화면모달(state,action){
            state.배경화면모달 = !state.배경화면모달;
        },
    }
})

export default modal;