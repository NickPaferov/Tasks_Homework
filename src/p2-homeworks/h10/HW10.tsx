import React from 'react'
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import preloader from './image/preloader.gif';

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    // <div>крутилка...</div>
                    <div><img alt="крутилка..." src={preloader} width={"200px"} height={"150px"}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
