import jQuery from 'jquery';

export default class ColDefFactory {

    createColDefs() {

        var columnDefs = [
            {headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true},
            {
                headerName: 'Employee', field: "name", enableRowGroup: true, enablePivot: true,
                    width: 150, pinned: true, editable: true, onCellValueChanged: cellValueChanged
            },
            {
                headerName: 'Country', field: "country", enableRowGroup: true, enablePivot: true,
                    width: 150, pinned: true, editable: true
            },
            {
                headerName: 'Designation', field: "designation", enableRowGroup: true, enablePivot: true,
                    width: 150, pinned: true
            },
            {
                headerName: 'Domain', field: "domain", enableRowGroup: true, enablePivot: true,
                    width: 150, pinned: true
            }
        ];
        return columnDefs;
    }
}

function cellValueChanged(obj) {
    console.log('from cell value changed');
    console.log(obj.newValue);
}
