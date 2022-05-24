$(document).ready(() => {
	$('#documentacao').on('click', () => {
		//método load
		//$('#pagina').load('documentacao.html')

		//método get
		/*$.get('documentacao.html', data => {
			$('#pagina').html(data);
		})*/

		//método post
		$.post('documentacao.html', data => {
			$('#pagina').html(data);
		})
	})

	$('#suporte').on('click', () => {
		//método load
		//$('#pagina').load('suporte.html')

		//método get
		/*$.get('suporte.html', data => {
			$('#pagina').html(data);
		})*/

		//método post
		$.post('suporte.html', data => {
			$('#pagina').html(data);
		})
	})

	//ajax
	$('#competencia').on('change', e => {

		let competencia = $(e.target).val();

		$.ajax({
			type: 'GET',
			url: 'app.php',
			data: `competencia=${competencia}`, //x-www-form-urlencoded
			dataType: 'json',
			success: dados => {
				$('#numeroVendas').html(dados.numeroVendas)
				$('#totalVendas').html(dados.totalVendas)
			},
			error: erro => { console.log(erro) }
		})

		//método, url, dados, sucesso, erro
	})
})