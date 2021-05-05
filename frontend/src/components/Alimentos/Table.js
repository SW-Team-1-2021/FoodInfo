import React from 'react';
import MaterialTable from 'material-table';


export const Table = (props) => {

    const columns = [
        {
            title: "Categoria", field: 'categoria'
        },
        {
            title: 'Nombre', field: 'nombre'
        },
        {
            title: "Procedencia", field: 'procedencia'
        },
        {
            title: 'Calorias(kcal)', field: 'calorias'
        }
    ]
    return (
        <div className="tablaMT">
            <MaterialTable striped bordered hover small
                title="ALIMENTOS"
                data={props.data}
                columns={columns}
                options={{
                    padding: 5,
                    search: false,
                    paging: true,
                    filtering: false,
                    sorting: true,
                    pageSize:5,
                    pageSizeOptions:5,
                    width: 300,
                    minWidth: 300,
                    rowStyle: { fontFamily: "Roboto" ,color:"#450E0D"},
                    headerStyle:{backgroundColor:"#B35C647F",color:"white",fontFamily: "Roboto", fontSize:"inherit",textAlign:"left"}
                }}
                style={{backgroundColor:'transparent'}}
            />
        </div>
    )
}
