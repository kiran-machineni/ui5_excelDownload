sap.ui.define(
  ["com/myorg/excelDownload/controller/BaseController", "../lib/XLSX"],
  function (Controller, XLSX) {
    "use strict";

    return Controller.extend("com.myorg.excelDownload.controller.MainView", {
      onInit: function () {},
      onExcelDownload: function () {
        //sheet1
        var sheet1FormatObj = [];

        /* XLS Head Columns */
        var sheet1XLSHeader = ["Order Id", "Quantity", "Price"];

        /* XLS Rows Data */
        var sheet1Data = [
          {
            "Order Id": 1,
            Quantity: 3,
            Price: 300,
          },
          {
            "Order Id": 2,
            Quantity: 10,
            Price: 1000,
          },
        ];

        sheet1FormatObj.push(sheet1XLSHeader);
        $.each(sheet1Data, function (index, value) {
          var innerRowData = [];
          $("tbody").append(
            "<tr><td>" +
              value.SAPID +
              "</td><td>" +
              value.catalog +
              "</td></tr>"
          );
          $.each(value, function (ind, val) {
            innerRowData.push(val);
          });
          sheet1FormatObj.push(innerRowData);
        });

        //sheet2
        var sheet2FormatObj = [];

        /* XLS Head Columns */
        var sheet2XLSHeader = ["Order Id", "Item"];

        /* XLS Rows Data */
        var sheet2Data = [
          {
            "Order Id": 1,
            Item: "Mobile Screen Protector",
          },
          {
            "Order Id": 2,
            Item: "Mobile Screen Protector",
          },
        ];

        sheet2FormatObj.push(sheet2XLSHeader);
        $.each(sheet2Data, function (index, value) {
          var innerRowData = [];
          $("tbody").append(
            "<tr><td>" +
              value.SAPID +
              "</td><td>" +
              value.catalog +
              "</td></tr>"
          );
          $.each(value, function (ind, val) {
            innerRowData.push(val);
          });
          sheet2FormatObj.push(innerRowData);
        });

        /* File Name */
        var filename = "Download.XLS";

        /* Sheet Name */
        var sheet1_ws_name = "sheet1";
        var sheet2_ws_name = "sheet2";

        var wb = XLS.utils.book_new();
        var ws1 = XLS.utils.aoa_to_sheet(sheet1FormatObj);
        var ws2 = XLS.utils.aoa_to_sheet(sheet2FormatObj);

        /* Add worksheet to workbook */
        XLS.utils.book_append_sheet(wb, ws1, sheet1_ws_name);
        XLS.utils.book_append_sheet(wb, ws2, sheet2_ws_name);

        /* Write workbook and Download */
        XLS.writeFile(wb, filename);
      },
    });
  }
);
