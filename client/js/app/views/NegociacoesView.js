class NegociacoesView extends View {
    
    constructor(elemento) {
        
        super(elemento);
    }
    
    template(model) {
        
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordenaColuna('data')">DATA</th>
                    <th onclick="negociacaoController.ordenaColuna('quantidade')">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordenaColuna('valor')">VALOR</th>
                    <th onclick="negociacaoController.ordenaColuna('volume')">VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>
                  
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.volumeTotal}
                </td>
            </tfoot>
            
        </table>
        `;
    }
}
