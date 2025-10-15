public class Filme {
    String nome;
    int anoLancamento;
    double somaDasAvaliacoes;
    int totalDeAvaliacoes;

    void exibeFichaTecnica(){
        System.out.println("Filme: " + nome);
        System.out.println("Lançamento: " + anoLancamento);

    }

    void avalia(double nota){
        somaDasAvaliacoes +=nota;
        totalDeAvaliacoes++;

    }

}