class TextBooksController < ApplicationController
  def show
    @text_book = current_user.text_books.find(params[:id])
  end
end
