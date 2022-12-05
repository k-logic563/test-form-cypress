describe('フォームテスト', () => {
    it ('正常に送受信できる', () => {
        const name = 'iwata'
        const email = 'iwata@example.com'

        cy.visit('http://localhost:8080')
        // 名前を入力
        cy.get('input[name=name]').type(name)
        // メールアドレスを入力
        cy.get('input[name=email]').type(email)
        // 送信する
        cy.get('input[type=submit]').click()
        // メッセージが表示される
        cy.get('#js-result').contains(name).contains(email)
    })
})