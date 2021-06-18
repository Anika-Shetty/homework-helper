class SubmissionsController < ApplicationController
  def show
    @submission = current_user.submissions.find(params[:id])
  end
end
