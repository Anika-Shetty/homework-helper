require "test_helper"

class TextBooksControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get text_books_show_url
    assert_response :success
  end
end
