
      $(document).ready(function () {
          $('#addItemForm input[type="number"]').on('input', function () {
              var quantity = parseFloat($('#quantity').val()) || 0;
              var unitPrice = parseFloat($('#unitPrice').val()) || 0;
              var total = quantity * unitPrice;
              $('#totalAmount').text(total.toFixed(2));
          });
      });
