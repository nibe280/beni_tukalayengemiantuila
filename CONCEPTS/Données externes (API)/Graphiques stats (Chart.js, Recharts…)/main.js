const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr'],
    datasets: [{
      label: 'Ventes',
      data: [12, 19, 3, 5],
      backgroundColor: ['red', 'blue', 'green', 'orange']
    }]
  }
});
