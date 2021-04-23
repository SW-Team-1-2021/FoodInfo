import React from 'react';
import MaterialTable from 'material-table';

export const Table = (data) => {

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
                title="Alimentos"
                data={data}
                columns={columns}
                options={{
                    padding: 25,
                    search: false,
                    paging: true,
                    filtering: false,
                    sorting: true,
                    // exportButton:true,
                    headerStyle:{backgroundColor:'transparent'}
                }}
                style={{fontFamily:'Comic Neue',backgroundColor:'transparent'}}
            />
        </div>
    )
}
