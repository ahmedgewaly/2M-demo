function loadDataTable() { 
$('.dataTables-example').DataTable({
    pageLength: 25,
    responsive: true,
    dom: '<"html5buttons"B>lTfgitp',
    // buttons: [
    //     { extend: 'copy' },
    //     { extend: 'csv' },
    //     { extend: 'excel', title: 'ExampleFile' },
    //     { extend: 'pdf', title: 'ExampleFile' },

    //     {
    //         extend: 'print',
    //         customize: function (win) {
    //             $(win.document.body).addClass('white-bg');
    //             $(win.document.body).css('font-size', '10px');

    //             $(win.document.body).find('table')
    //                 .addClass('compact')
    //                 .css('font-size', 'inherit');
    //         }
    //     }
    // ]
 
});

}

function loadDashboard(value) { 
     setTimeout(function() {
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    timeOut: 4000
                };
                // toastr.success('Responsive Admin Theme', 'Welcome to INSPINIA');
                toastr.success('Welcome back ' + value, '2M - Customs Clearance');
            }, 1300);


            // var data1 = [
            //     [0,4],[1,8],[2,5],[3,10],[4,4],[5,16],[6,5],[7,11],[8,6],[9,11],[10,30],[11,10],[12,13],[13,4],[14,3],[15,3],[16,6]
            // ];
            // var data2 = [
            //     [0,1],[1,0],[2,2],[3,0],[4,1],[5,3],[6,1],[7,5],[8,2],[9,3],[10,2],[11,1],[12,0],[13,2],[14,8],[15,0],[16,0]
            // ];
            // $("#flot-dashboard-chart").length && $.plot($("#flot-dashboard-chart"), [
            //     data1, data2
            // ],
            //         {
            //             series: {
            //                 lines: {
            //                     show: false,
            //                     fill: true
            //                 },
            //                 splines: {
            //                     show: true,
            //                     tension: 0.4,
            //                     lineWidth: 1,
            //                     fill: 0.4
            //                 },
            //                 points: {
            //                     radius: 0,
            //                     show: true
            //                 },
            //                 shadowSize: 2
            //             },
            //             grid: {
            //                 hoverable: true,
            //                 clickable: true,
            //                 tickColor: "#d5d5d5",
            //                 borderWidth: 1,
            //                 color: '#d5d5d5'
            //             },
            //             colors: ["#1ab394", "#1C84C6"],
            //             xaxis:{
            //             },
            //             yaxis: {
            //                 ticks: 4
            //             },
            //             tooltip: false
            //         }
            // );

            // var doughnutData = {
            //     labels: ["App","Software","Laptop" ],
            //     datasets: [{
            //         data: [300,50,100],
            //         backgroundColor: ["#a3e1d4","#dedede","#9CC3DA"]
            //     }]
            // } ;


            // var doughnutOptions = {
            //     responsive: false,
            //     legend: {
            //         display: false
            //     }
            // };


            // var ctx4 = document.getElementById("doughnutChart").getContext("2d");
            // new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

            // var doughnutData = {
            //     labels: ["App","Software","Laptop" ],
            //     datasets: [{
            //         data: [70,27,85],
            //         backgroundColor: ["#a3e1d4","#dedede","#9CC3DA"]
            //     }]
            // } ;


            // var doughnutOptions = {
            //     responsive: false,
            //     legend: {
            //         display: false
            //     }
            // };


            // var ctx4 = document.getElementById("doughnutChart2").getContext("2d");
            // new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

}