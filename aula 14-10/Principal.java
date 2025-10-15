public class Principal {

    public static void main(String[] args){
        Filme meuFilme = new Filme();
        Filme meuFilme2 = new Filme();

        meuFilme.nome = "A volta dos que não foram II";
        meuFilme.anoLancamento = 2025;

        meuFilme2.nome = "Harry Potter";
        meuFilme2.anoLancamento = 2025;


        meuFilme2.exibeFichaTecnica();
        meuFilme.avalia(9);
        meuFilme.avalia(7);

        System.out.println(meuFilme.somaDasAvaliacoes);
        System.out.println(meuFilme.totalDeAvaliacoes);



    }
}