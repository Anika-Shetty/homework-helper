class HomepageController < ApplicationController
  before_action :authenticate_user!

  def index
    @text_books = current_user.text_books
  end
end
