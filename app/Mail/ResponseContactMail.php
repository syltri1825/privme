<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResponseContactMail extends Mailable
{
    use Queueable, SerializesModels;
    protected $pointClientData;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->pointClientData = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('pfstack06@gmail.com')
                    ->subject($this->pointClientData['object'])
                    ->view('Email.contact_response')
                    ->with([
                        'data' => $this->pointClientData
                    ]);
    }
}
